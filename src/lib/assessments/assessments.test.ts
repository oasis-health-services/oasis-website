import { describe, it, expect } from 'vitest';
import { screenersList, getScreenerBySlug, getScreenerById } from './index';

describe('screener lookup', () => {
    it('finds a screener by its full slug', () => {
        expect(getScreenerBySlug('depression/phq-9')?.id).toBe('phq-9');
    });

    it('finds a screener by a trailing slug fragment', () => {
        expect(getScreenerBySlug('phq-9')?.id).toBe('phq-9');
    });

    it('finds a screener by id', () => {
        expect(getScreenerById('gad-7')?.name).toBe('GAD-7');
    });

    it('returns undefined for an unknown id', () => {
        expect(getScreenerById('does-not-exist')).toBeUndefined();
    });

    it('returns undefined for an unknown slug', () => {
        expect(getScreenerBySlug('nonsense/xyz')).toBeUndefined();
    });
});

describe.each(screenersList.map((s) => [s.id, s] as const))(
    'screener data integrity: %s',
    (_id, screener) => {
        it('has at least one question', () => {
            expect(screener.questions.length).toBeGreaterThan(0);
        });

        it('has thresholds that are contiguous and cover the full scoring range', () => {
            const { min, max, thresholds } = screener.scoring;
            expect(thresholds.length).toBeGreaterThan(0);
            expect(thresholds[0].min).toBe(min);
            expect(thresholds[thresholds.length - 1].max).toBe(max);
            for (let i = 1; i < thresholds.length; i++) {
                expect(thresholds[i].min).toBe(thresholds[i - 1].max + 1);
            }
        });

        it('maps every threshold level to a defined result level', () => {
            for (const t of screener.scoring.thresholds) {
                expect(screener.resultLevels[t.level]).toBeDefined();
            }
        });

        it('keeps each resultLevels key consistent with its level field', () => {
            for (const [key, level] of Object.entries(screener.resultLevels)) {
                expect(level.level).toBe(key);
            }
        });
    }
);

describe('PHQ-9 critical question', () => {
    it('flags the self-harm item as critical', () => {
        const phq9 = getScreenerById('phq-9');
        expect(phq9).toBeDefined();
        const critical = phq9!.questions.find((q) => q.id === phq9!.criticalQuestionId);
        expect(critical?.isCritical).toBe(true);
    });
});
