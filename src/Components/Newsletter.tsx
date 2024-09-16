import { ChangeEvent, FormEvent, useState } from 'react';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            setError('Email is required');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            setSuccess('Thank you for subscribing!');
            setEmail('');
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto bg-white">
            <div className="max-w-xl text-center mx-auto">
                <div className="mb-5">
                    <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-black">
                        Sign up to our newsletter
                    </h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                        <div className="w-full">
                            <label htmlFor="hero-input" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="hero-input"
                                name="hero-input"
                                value={email}
                                onChange={handleChange}
                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </div>
                </form>
                {error && <p className="mt-4 text-red-600">{error}</p>}
                {success && <p className="mt-4 text-green-600">{success}</p>}
            </div>
        </div>
    );
};

export default Newsletter;
