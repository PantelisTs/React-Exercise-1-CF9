interface IdFormProps {
    firstName: string;
    lastName: string;
    email: string;
}

const IdForm = ({ firstName, lastName, email }: IdFormProps) => {
    return (
        <>
            <div className="border border-ex1-blue rounded-xl w-full max-w-md mb-20 bg-ex1-blue h-60 pt-3 text-ex1-light-blue">
                <div className="flex flex-col gap-4 text-center">

                    <div>-PERSONAL ID-</div>

                    <div className="flex mx-auto justify-around items-center gap-30">
                        <div className="flex flex-col gap-1">
                            <div className="text-md">Firstname:</div>
                            <div className="text-xl">{firstName || "-"}</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-md">Lastname:</div>
                            <div className="text-xl">{lastName || "-"}</div>
                        </div>
                    </div>

                    <div>
                        <div className="text-md">Email:</div>
                        <div className="text-xl">{email || "-"}</div>
                    </div>

                </div>
            </div>
        </>

    );
};

export default IdForm;


