import { useState } from "react";
import Form from "./components/MainComponents/Form.tsx";
import IdForm from "./components/MainComponents/IdForm.tsx";
import Layout from "./components/Layout.tsx";

interface PersonalData {
    firstName: string;
    lastName: string;
    email: string;
}

const initialData: PersonalData = {
    firstName: "",
    lastName: "",
    email: "",
};

const App = () => {
    const [personalData, setPersonalData] = useState<PersonalData>(initialData);

    return (
        <Layout addClasses="bg-ex1-light-blue">
            <Form onSubmit={setPersonalData} />
            <IdForm
                firstName={personalData.firstName}
                lastName={personalData.lastName}
                email={personalData.email}
            />
        </Layout>


    );
};

export default App;
