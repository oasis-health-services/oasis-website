import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function formatPhoneNumber(value) {
	if (!value) return value;
	const numbers = value.replace(/\D/g, "").slice(0, 10);

	if (numbers.length === 0) return "";
	if (numbers.length < 4) return `(${numbers}`;
	if (numbers.length < 7) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;

	return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
}

export function formatPostalCode(value) {
	const numbers = value.replace(/\D/g, "").slice(0, 10);

	if (numbers.length === 0) return "";
	if (numbers.length < 5) return `${numbers}`;

	return `${numbers.slice(0, 5)}-${numbers.slice(5, 10)}`;
}

export function formatAddress(address) {
	return `${address.street}, ${address.city}, ${address.state}. ${formatPostalCode(address.postalCode)}`;
}

export function calculateAge(dob) {
	const today = new Date();
	const birthDate = new Date(dob);
	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDiff = today.getMonth() - birthDate.getMonth();
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

export function isMinor(dob) {
	return calculateAge(dob) < 18;
}