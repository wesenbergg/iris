import Fieldset from "@/components/form/Fieldset";
import { createUserAction } from "./serverActions";
import Input from "@/components/form/Input";
import ActionButtons from "@/components/form/ActionButtons";

const SignupPage = async () => {
  return (
    <div className="mx-auto my-8 max-w-screen-md rounded bg-slate-50 px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Create your account</h1>
      <form action={createUserAction} className="mb-16 space-y-8">
        <Fieldset legend="Mandatory information">
          <Input
            id="name"
            label="User name"
            tip="Name must be unique and cannot be changed."
            required
          />
          <Input id="email" label="Email" required />
        </Fieldset>

        <Fieldset legend="Password">
          <Input
            id="password"
            type="password"
            label="Type your password"
            required
          />
          <Input
            id="confirmPassword"
            type="password"
            label="Confirm your password"
            required
          />
        </Fieldset>

        <Fieldset legend="Additional information">
          <Input id="firstName" label="First name" />
          <Input id="lastName" label="Last name" />
        </Fieldset>

        <ActionButtons />
      </form>
    </div>
  );
};

export default SignupPage;
