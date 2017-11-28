/**
 * This error is thrown when trying to insert a non existing
 * reference.
 * 
 * @see Reference
 */
export class BadReferenceError extends Error
{
    public referencePath;

    constructor(
        public part: string,
        public ref: string
    ) {
        super(`Unknown ${part} ${ref}. #/components/${part}/${ref} isn't defined yet. Maybe a typo ?`)

        this.referencePath = `#/components/${part}/${ref}`;
    }
}
