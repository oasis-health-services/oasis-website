import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Phone,
  RotateCcw,
  Info,
  Clock,
  FileText,
  Printer,
  ExternalLink,
} from "lucide-react"

export function ScreenerTool({ config }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [hasCriticalFlag, setHasCriticalFlag] = useState(false)
  const [showInstructions, setShowInstructions] = useState(true)

  const questions = config.questions
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const currentQ = questions[currentQuestion]
  const options = currentQ.options || config.standardOptions || []
  const isAnswered = answers[currentQ.id] !== undefined

  const handleAnswer = (value) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: value }))

    // Check for critical flag
    if (currentQ.isCritical && value >= (currentQ.criticalThreshold ?? config.criticalThreshold ?? 1)) {
      setHasCriticalFlag(true)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setHasCriticalFlag(false)
    setShowInstructions(true)
  }

  const handleStart = () => {
    setShowInstructions(false)
  }

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)

  // Determine result level
  const getResult = () => {
    // Special handling for PC-PTSD-5 (check trauma exposure first)
    if (config.id === "pc-ptsd-5") {
      if (answers[0] === 0) {
        return config.resultLevels.noTrauma
      }
      // Count yes responses (excluding the trauma exposure question)
      const symptomScore = Object.entries(answers)
        .filter(([key]) => key !== "0")
        .reduce((sum, [, val]) => sum + val, 0)
      return symptomScore >= 3 ? config.resultLevels.positive : config.resultLevels.negative
    }

    // Handle critical flag override
    if (hasCriticalFlag && config.resultLevels.severe) {
      return config.resultLevels.severe
    }

    // Find matching threshold
    for (const threshold of config.scoring.thresholds) {
      if (totalScore >= threshold.min && totalScore <= threshold.max) {
        return config.resultLevels[threshold.level]
      }
    }

    // Fallback to first result level
    return Object.values(config.resultLevels)[0]
  }

  const result = getResult()
  const isSevere = result.level === "severe" || result.level === "positive" || hasCriticalFlag

  // Instructions screen
  if (showInstructions) {
    return (
      <Card className="shadow-lg">
        <CardHeader className="text-center pb-4">
          <Badge variant="secondary" className="w-fit mx-auto mb-4">
            {config.questionCount} Questions
          </Badge>
          <CardTitle className="text-2xl">{config.fullName}</CardTitle>
          <CardDescription className="text-base mt-2">{config.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Time to Complete</p>
                <p className="text-sm text-muted-foreground">{config.timeEstimate}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Questions</p>
                <p className="text-sm text-muted-foreground">{config.questionCount} items</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-secondary">
            <h4 className="font-medium mb-2">About This Screener</h4>
            <p className="text-sm text-muted-foreground">{config.purpose}</p>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200">
            <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">{config.disclaimer}</p>
          </div>

          <div className="text-center text-xs text-muted-foreground">
            <p>{config.citation}</p>
            {config.citationUrl && (
              <a
                href={config.citationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline mt-1"
              >
                Learn more <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>

          <Button onClick={handleStart} className="w-full" size="lg">
            Begin Assessment
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Results screen
  if (showResults) {
    return (
      <div className="space-y-6">
        {/* Crisis Alert */}
        {(isSevere || hasCriticalFlag) && config.resultLevels.severe && (
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">If you are in crisis, please reach out now</h3>
                  <p className="text-red-700 text-sm mb-4">
                    If you are having thoughts of harming yourself, please call or text 988 immediately to speak with a
                    trained crisis counselor.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <a href="tel:988">
                        <Phone className="h-4 w-4 mr-2" />
                        Call 988 Now
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="border-red-300 text-red-700 hover:bg-red-100 bg-transparent"
                    >
                      <a href="sms:988">Text 988</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Card */}
        <Card className={`border-2 ${result.bgColor}`}>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline">Your Results</Badge>
              <Badge variant="secondary">
                Score: {totalScore} / {config.scoring.max}
              </Badge>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-full ${result.iconColor} flex items-center justify-center`}>
                <CheckCircle2 className={`h-5 w-5 ${result.color}`} />
              </div>
              <CardTitle className={result.color}>{result.title}</CardTitle>
            </div>
            <CardDescription className="text-base text-foreground/80">{result.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Recommendations */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Recommendations</h4>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Helpful Resources</h4>
              <div className="grid gap-3">
                {result.resources.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.href}
                    className="flex items-center justify-between p-4 rounded-lg bg-background border hover:border-primary transition-colors group"
                  >
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {resource.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Button variant="outline" onClick={handleRestart} className="bg-transparent">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Take Again
                </Button>
                <Button variant="outline" onClick={() => window.print()} className="bg-transparent">
                  <Printer className="h-4 w-4 mr-2" />
                  Print Results
                </Button>
              </div>
              <Button asChild>
                <a href="/contact">
                  Schedule an Appointment
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <p className="text-xs text-center text-muted-foreground px-4">{config.disclaimer}</p>
      </div>
    )
  }

  // Question screen
  return (
    <Card className="shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary">
            Question {currentQuestion + 1} of {questions.length}
          </Badge>
          {currentQ.isCritical && (
            <Badge variant="outline" className="text-amber-600 border-amber-300">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Sensitive
            </Badge>
          )}
        </div>
        <Progress value={progress} className="h-2 mb-6" />
        <CardDescription className="text-sm mb-2">
          Over the <strong>last 2 weeks</strong>, how often have you been bothered by:
        </CardDescription>
        <CardTitle className="text-xl leading-relaxed">{currentQ.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.value)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${answers[currentQ.id] === option.value && options.findIndex((o) => o.label === option.label && o.value === option.value) === index
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50 hover:bg-muted/50"
              }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${answers[currentQ.id] === option.value && options.findIndex((o) => o.label === option.label && o.value === option.value) === index
                  ? "border-primary bg-primary"
                  : "border-muted-foreground"
                  }`}
              >
                {answers[currentQ.id] === option.value && options.findIndex((o) => o.label === option.label && o.value === option.value) === index && (
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                )}
              </div>
              <span className="text-foreground">{option.label}</span>
            </div>
          </button>
        ))}

        <div className="flex items-center justify-between pt-6 border-t mt-6">
          <Button variant="ghost" onClick={handlePrevious} disabled={currentQuestion === 0}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button onClick={handleNext} disabled={!isAnswered}>
            {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}