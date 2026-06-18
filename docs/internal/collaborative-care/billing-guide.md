# Oasis Health Services: Internal CoCM Billing & Reimbursement Manual

This manual provides a detailed operational reference for the billing, coding, and financial workflow of the Collaborative Care Model (CoCM). It outlines the rules that govern reimbursement, the exact time-tracking thresholds, and the financial flows between partner primary care practices and Oasis Health Services.

---

## 1. Core Billing Principles

To remain compliant with the Centers for Medicare & Medicaid Services (CMS) and private insurance regulations, the following core principles must be followed in every partnership:

1.  **The Primary Care Practice Bills:** Oasis Health Services **cannot** bill patients or insurance companies directly for CoCM codes. The primary care practice (PCP) is the sole billing entity. All claims are submitted under the billing NPI of the treating primary care provider (MD, DO, NP, PA, or CNM).
2.  **Medical Benefit Reimbursement:** CoCM services are billed under the patient’s **medical benefits**, not behavioral health carve-outs. This bypasses many pre-authorization requirements associated with traditional psychiatry.
3.  **Cost-Sharing Notice:** Patients are subject to standard medical copayments and deductibles for CoCM services. Verbal or written consent stating that the patient is aware of potential cost-sharing must be documented in the Electronic Health Record (EHR) before care begins.

---

## 2. Step-by-Step Billing Workflow

```
   1. Initiating Visit       2. Secure Consent         3. Log BHCM Time         4. End-of-Month Review
┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│  PCP performs E/M    │  │ Document verbal/     │  │ BHCM tracks cumulative│  │ Billing manager      │
│  or wellness visit,  │──▶ written consent      │──▶ clinical minutes in  │──▶ aggregates times    │
│  notes psychiatric   │  │ regarding copays/    │  │ registry across the  │  │ and submits claims   │
│  need, handoffs.     │  │ coordinate of care.  │  │ calendar month.      │  │ using CPT codes.     │
└──────────────────────┘  └──────────────────────┘  └──────────────────────┘  └──────────────────────┘
```

1.  **The Initiating Visit:** For new patients or patients not seen in the clinic within the past 12 months, the PCP must conduct a face-to-face initiating visit (e.g., a standard E/M visit, Annual Wellness Visit, or Transitional Care Management visit) before CoCM services can commence.
2.  **Consent Documentation:** The Care Manager or PCP secures patient consent, explaining the team structure and the billing of monthly cumulative services. This is documented in the EHR.
3.  **Active Registry Time Logging:** The Behavioral Health Care Manager (BHCM) logs all clinical time spent on the patient in the registry. 
    *   **What Counts:** Phone consultations, in-person counseling, registry charting, coordinate planning, and time spent reviewing the patient's case with the Oasis Psychiatric Consultant.
    *   **What Does NOT Count:** Time spent by the Psychiatric Consultant directly, or general administrative tasks (like booking appointments).
4.  **End-of-Month Claim Submission:** At the end of the calendar month, the primary care practice’s billing manager aggregates the tracked minutes per patient and submits the claims.

---

## 3. CPT & HCPCS Code Matrix (CMS Midpoint Rule)

CMS utilizes the **CPT Midpoint Rule** for time-based codes. This allows a code to be billed once more than 50% of the target time threshold has been exceeded.

| Code | Type | Target Time | Minimum Time Required | Billing Time Range (per calendar month) |
| :--- | :--- | :--- | :--- | :--- |
| **99492** | Initial Month CoCM | 70 minutes | **36 minutes** | **36 to 85 minutes** in the first calendar month. |
| **99493** | Subsequent Months CoCM | 60 minutes | **31 minutes** | **31 to 75 minutes** in any subsequent month. |
| **99494** | Add-on Code (Additional Time) | 30 minutes | **16 minutes** | Used in conjunction with 99492 or 99493 for each additional 30 minutes (billable starting at **16 minutes** of additional time). |
| **G2214** | Short-Unit CoCM (Initial/Subsequent) | 30 minutes | **16 minutes** | **16 to 30 minutes** in a month. (Note: Mutually exclusive with 99492/99493 for the same patient in the same month). |
| **G0512** | FQHC / RHC Integrated Code | 70 minutes | **36 minutes** | Billed by Federally Qualified Health Centers and Rural Health Clinics. |

### Billing Examples:
*   **Scenario A:** In the first month, the BHCM spends a total of 50 minutes calling a patient, tracking outcomes, and consulting with the psychiatrist. **Bill 99492** (falls in the 36-85 min range).
*   **Scenario B:** In the second month, the BHCM spends 95 minutes on a complex case. **Bill 99493** (first 60 mins, threshold met at >30 mins) **AND 99494** (remaining 35 mins, add-on threshold met at >15 mins).
*   **Scenario C:** In a subsequent month, the patient is doing well, and the BHCM only logs 22 minutes of tracking. **Bill G2214** (since 99493 requires a minimum of 31 minutes, the time is downgraded to G2214 which requires 16-30 minutes).

---

## 4. The 2026 CMS APCM Integration Update

Effective January 1, 2026, CMS introduced three new add-on codes to simplify care management alignment when clinics are participating in **Advanced Primary Care Management (APCM)** services:

*   **HCPCS G0568:** CoCM/BHI add-on for APCM in a non-facility setting (level 1).
*   **HCPCS G0569:** CoCM/BHI add-on for APCM in a non-facility setting (level 2).
*   **HCPCS G0570:** CoCM/BHI add-on for APCM in a facility setting.

These codes allow practices engaged in value-based primary care models to report monthly collaborative behavioral health care alongside core primary care management packages without triggering billing rejections.

---

## 5. Oasis Financial Flow Arrangements

Because Oasis Health Services does not bill the insurance carrier directly, the partnership revenue is structured through one of two models:

### Option A: Professional Services Purchased Agreement (Payer-Contract)
1. The partner primary care practice bills the insurance carrier for the CoCM codes (e.g., 99492) and collects 100% of the reimbursement.
2. Oasis bills the primary care practice a contracted service fee:
   * A flat monthly rate per enrolled patient (to cover BHCM service access).
   * Plus a flat hourly rate for the Psychiatric Consultant’s registry review time.
3. **Financial Outcome:** The primary care practice keeps the difference between the CPT code reimbursement and Oasis's fee, creating a net-positive revenue stream for the clinic.

### Option B: Percentage Revenue-Share Model (Managed Service)
1. The partner primary care practice bills and collects the CoCM code revenue.
2. Under a revenue-share agreement, the practice pays Oasis a contractually agreed-upon percentage (typically 65% to 75%) of all collected CoCM insurance payments to cover the staffing cost of the Oasis-provided Care Manager and the Psychiatric Consultant.
3. **Financial Outcome:** Reduces financial risk for the primary care clinic, as they only pay Oasis for services that have successfully been reimbursed by the insurer.
