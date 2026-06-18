# Oasis Health Services: Internal CoCM Implementation Guide

This document outlines the operational and technical guidelines for Oasis Health Services when establishing Collaborative Care Model (CoCM) partnerships with primary care practices. It details staffing responsibility models, cross-cutting technical concerns, and an evaluation of existing registry systems.

---

## 1. Staffing Responsibility: Who Employs the Care Manager?

Determining which organization employs the Behavioral Health Care Manager (BHCM) is a critical operational decision. There are two primary models viable for Oasis partnerships:

### Model A: Primary Care-Employed BHCM (Consultant-Only Model)
In this model, the partner primary care practice hires, employs, and manages the BHCM. Oasis Health Services provides only the remote **Psychiatric Consultant**.
* **Clinical Flow:** The PCP's in-house BHCM manages the caseload registry and conducts weekly review meetings with the Oasis Psychiatric Consultant.
* **Billing & Revenue:** The primary care practice bills CPT codes 99492, 99493, and 99494 directly under the PCP's name. The practice pays Oasis a flat monthly consultation fee or an hourly rate for the consultant's time.
* **Pros:** Highly compliant; BHCM is physically on-site and fully integrated into the PCP's daily culture.
* **Cons:** High recruiting and overhead burden on the primary care practice, which often delays program launch.

### Model B: Oasis-Employed BHCM (Shared Staffing / Turn-Key Model)
In this model, Oasis Health Services employs the BHCM and "leases" or embeds them (either virtually or physically) into the partner primary care practice.
* **Clinical Flow:** Oasis provides both the BHCM and the Psychiatric Consultant. The BHCM has access to the PCP's Electronic Health Record (EHR) and operates as a virtual extension of their clinic.
* **Billing & Revenue:** The primary care practice still bills the CPT integration codes (as billing must occur under the PCP). However, billing revenue is shared between the practices via a **Professional Services Agreement (PSA)**, where the PCP reimburses Oasis for the BHCM staffing and consultation.
* **Pros:** Removes hiring barriers for the PCP, allowing rapid scaling; Oasis maintains quality control over therapeutic delivery.
* **Cons:** Requires complex legal contracts (PSA) and joint HIPAA business associate agreements (BAAs) to ensure compliant data sharing.

---

## 2. Managing Cross-Cutting Concerns

Implementing CoCM requires addressing several cross-cutting operational and technical concerns:

1. **HIPAA & Consent:** Patients must sign a coordinate-of-care consent form before entering the registry, explicitly acknowledging that their records will be shared with the Oasis consulting team and that they may face standard copays under their medical benefit.
2. **EHR Syncing:** Double-documentation is a common source of staff burnout. Care Managers must either document directly within the PCP's EHR (via secure VPN/portal) or utilize a registry platform that offers bi-directional API integration with major primary care EHRs (e.g., Athenahealth, eClinicalWorks, Epic).
3. **Time-Tracking Compliance:** CoCM billing is strictly time-based. A system must track every minute the BHCM spends in direct patient contact, coordinate reviews, and consultation. The system must automatically aggregate these minutes at the end of each calendar month.

---

## 3. Technology Systems: Custom vs. Existing Registries

Developing a custom, in-house patient registry and time-tracking system is **not recommended**. The cost of software development, HIPAA/HITRUST certification, and building individual API integrations for various partner EHRs outweighs the benefits. 

Instead, Oasis should leverage one of the following existing, clinically validated solutions:

### Option 1: The AIMS Caseload Tracker (Low Cost / Foundational)
* **Overview:** Developed by the University of Washington's AIMS Center (the creators of CoCM).
* **Viability:** Highly viable. It is a secure, web-based registry built specifically to meet the clinical requirements of CoCM caseload reviews.
* **Best For:** Pilot programs and partnerships with smaller, budget-conscious clinics.

### Option 2: Commercial CoCM Platforms (Scalable & Integrated)
These platforms are purpose-built for BHI/CoCM operations and include automated time-tracking, billing code generation, and EHR connectors:
* **NeuroFlow:** Offers excellent patient-facing engagement tools alongside a clinical registry that automates severity filtering and prioritization.
* **ThoroughCare:** Ideal for billing compliance, offering seamless time-tracking modules tailored specifically to Medicare’s BHI and CoCM requirements.
* **Mirah:** Specializes in measurement-based care (MBC) tracking, offering robust trend graphs of PHQ-9 and GAD-7 scores for caseload reviews.

### Option 3: EHR-Native Registries
* **Overview:** Large EHR systems (like Epic's behavioral health module or Athenahealth's care coordination tools) have native registry functions.
* **Viability:** If the partner primary care practice utilizes a high-end EHR with an active CoCM module, Oasis should operate directly inside that module to eliminate data duplication entirely.
