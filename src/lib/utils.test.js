import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
    cn,
    formatPhoneNumber,
    formatPostalCode,
    formatAddress,
    calculateAge,
    isMinor,
} from './utils';

describe('cn', () => {
    it('joins class names', () => {
        expect(cn('a', 'b')).toBe('a b');
    });

    it('lets later Tailwind classes win over conflicting earlier ones', () => {
        expect(cn('p-2', 'p-4')).toBe('p-4');
    });

    it('ignores falsy/conditional values', () => {
        const show = false;
        expect(cn('a', show && 'b', null, undefined, 'c')).toBe('a c');
    });
});

describe('formatPhoneNumber', () => {
    it('formats a full 10-digit number', () => {
        expect(formatPhoneNumber('1234567890')).toBe('(123) 456-7890');
    });

    it('strips non-digits before formatting', () => {
        expect(formatPhoneNumber('123-456-7890')).toBe('(123) 456-7890');
    });

    it('formats partial input progressively', () => {
        expect(formatPhoneNumber('123')).toBe('(123');
        expect(formatPhoneNumber('1234')).toBe('(123) 4');
        expect(formatPhoneNumber('123456')).toBe('(123) 456');
    });

    it('returns empty string for empty/garbage input', () => {
        expect(formatPhoneNumber('')).toBe('');
        expect(formatPhoneNumber('abc')).toBe('');
    });
});

describe('formatPostalCode', () => {
    it('keeps a 5-digit ZIP as-is', () => {
        expect(formatPostalCode('78701')).toBe('78701');
    });

    it('formats a 9-digit ZIP as ZIP+4', () => {
        expect(formatPostalCode('787011234')).toBe('78701-1234');
    });

    it('normalizes an already-hyphenated ZIP+4', () => {
        expect(formatPostalCode('78701-1234')).toBe('78701-1234');
    });

    it('returns empty string for empty input', () => {
        expect(formatPostalCode('')).toBe('');
    });
});

describe('formatAddress', () => {
    it('renders a full address line', () => {
        expect(
            formatAddress({
                street: '1 Main St',
                city: 'Austin',
                state: 'TX',
                postalCode: '78701',
            })
        ).toBe('1 Main St, Austin, TX. 78701');
    });
});

describe('calculateAge / isMinor', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2026-06-18T12:00:00'));
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('computes age when the birthday has already passed this year', () => {
        expect(calculateAge('2000-01-01')).toBe(26);
    });

    it('subtracts a year when the birthday has not yet occurred', () => {
        expect(calculateAge('2000-12-31')).toBe(25);
    });

    it('treats someone under 18 as a minor', () => {
        expect(isMinor('2010-06-18')).toBe(true);
    });

    it('treats someone 18 or older as not a minor', () => {
        expect(isMinor('2005-06-18')).toBe(false);
    });
});
