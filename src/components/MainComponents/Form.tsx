const Form = () => {
    return (
        <div className="border border-ex1-blue rounded-xl p-12 w-full max-w-md mx-auto mb-20">
            <form className="flex flex-col gap-6">


                <div className="flex flex-col gap-1">
                    <label htmlFor="firstName" className="text-ex1-blue text-sm font-bold">
                        First Name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="border border-ex1-blue rounded-lg px-4 py-2 outline-none text-sm"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="lastName" className="text-ex1-blue text-sm font-bold">
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="border border-ex1-blue rounded-lg px-4 py-2 outline-none text-sm"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-ex1-blue text-sm font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border border-ex1-blue rounded-lg px-4 py-2 outline-none text-sm"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-ex1-blue text-white font-bold py-2 rounded-lg cursor-pointer mt-2"
                >
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Form;