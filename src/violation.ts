/**
 * This is the return type of an api validation error
 */
export interface Violation
{
    /**
     * A given api path that represent the validation error
     * localisation.
     *
     * ex: info.description, paths.get./foo.response.200
     */
    path: string;

    /**
     * A textual message explaining the violation
     */
    message: string;
}
