import { describe, it, expect } from 'vitest';
import { ContactSchema, InsuranceSchema } from './schema';

const validContact = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    phone: '1234567890',
    inquiryType: 'Therapy',
    message: 'I would like to learn more about your services.',
    consent: true,
};

describe('ContactSchema', () => {
    it('accepts a well-formed contact', () => {
        expect(ContactSchema.safeParse(validContact).success).toBe(true);
    });

    it('requires consent to be true', () => {
        expect(ContactSchema.safeParse({ ...validContact, consent: false }).success).toBe(false);
    });

    it('rejects an invalid email', () => {
        expect(ContactSchema.safeParse({ ...validContact, email: 'not-an-email' }).success).toBe(false);
    });

    it('treats an empty phone string as an optional (absent) value', () => {
        expect(ContactSchema.safeParse({ ...validContact, phone: '' }).success).toBe(true);
    });

    it('rejects a phone that is not 10 digits', () => {
        expect(ContactSchema.safeParse({ ...validContact, phone: '123' }).success).toBe(false);
    });

    it('rejects an unrecognized inquiry type', () => {
        expect(ContactSchema.safeParse({ ...validContact, inquiryType: 'Nope' }).success).toBe(false);
    });

    it('rejects unknown keys (strict object)', () => {
        expect(ContactSchema.safeParse({ ...validContact, sneaky: 'x' }).success).toBe(false);
    });
});

describe('InsuranceSchema', () => {
    const base = {
        name: 'Aetna',
        type: 'PPO',
        memberId: '12345678',
        subscriberRelationship: 'self' as const,
    };

    it('accepts a self subscriber without subscriber details', () => {
        expect(InsuranceSchema.safeParse(base).success).toBe(true);
    });

    it('requires subscriber details when the relationship is not self', () => {
        expect(
            InsuranceSchema.safeParse({ ...base, subscriberRelationship: 'spouse' }).success
        ).toBe(false);
    });

    it('accepts a non-self relationship when full subscriber details are provided', () => {
        expect(
            InsuranceSchema.safeParse({
                ...base,
                subscriberRelationship: 'spouse',
                subscriber: { name: 'John Doe', dob: '1990-01-01' },
            }).success
        ).toBe(true);
    });

    it('rejects a member ID that is too short', () => {
        expect(InsuranceSchema.safeParse({ ...base, memberId: '123' }).success).toBe(false);
    });
});
