import { Violation } from '../violation';
/**
 * This error is thrown when something bad happens during
 * your open api document generation.
 *
 * @see Builder
 */
export class ViolationsError extends Error
{
    constructor(
        public violations: Violation[]
    ) {
        super(`Your open api document contains errors: ${violations.map((violation, index) => `\n${index + 1}. ${violation.message}`)}`);
    }
}
