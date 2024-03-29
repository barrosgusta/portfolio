import { PillSeparator } from "../pill-separator";
import { motion } from "framer-motion";
import { SubmitButton } from "../submit-button";
import { Check } from "lucide-react";
import { useState } from "react"
import { PropagateLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

export function ContactContent() {
    const { t } = useTranslation();

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormPending, setIsFormPending] = useState(false);
    const [submitButtonText, setSubmitButtonText] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); 
    
        try {
            const formData = new FormData(e.target as HTMLFormElement);

            setSubmitButtonText("");
            setIsFormPending(true);

            await fetch("https://getform.io/f/b4d41457-4df7-403e-b23f-c16a6efd1d4f", {
                method: "POST",
                body: formData,
            })
    
        } catch (error) {
            setSubmitButtonText(t("contactPage.button.error"));
            setIsFormPending(false);
        } finally {
            setIsFormPending(false);
            setSubmitButtonText (t("contactPage.button.success"));
            setIsFormSubmitted(true);
            clearForm();
        }
    }

    function clearForm() {
        setName("");
        setEmail("");
        setMessage("");
    }
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-justify">
                <div className="grid place-content-start">
                    <div className="grid">
                        <h1 className="text-zinc-800 dark:text-zinc-100 text-3xl font-bold">
                            {t("contactPage.title")}
                        </h1>
                        <PillSeparator className="my-3" />
                    </div>
                </div>


                {/* <div className="hidden md:flex justify-center items-center ">
                    <section className="mb-5 rounded-xl overflow-hidden border border-indigo-400 bg-zinc-100 shadow-default
                    dark:bg-zinc-800">
                        <figure className="hidden xl:block -hue-rotate-[-120deg] dark:grayscale dark:invert">
                            <iframe width="1000"
                                height="300"
                                loading="lazy"
                                src="https://maps.google.com/maps?width=878&amp;height=433&amp;hl=en&amp;q=Rua%20Bulc%C3%A3o%20Viana%20Rio%20do%20Sul+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </figure>
                        <figure className="-hue-rotate-[-120deg] dark:grayscale dark:invert md:block xl:hidden">
                            <iframe width="700"
                                height="525"
                                loading="lazy"
                                src="https://maps.google.com/maps?width=878&amp;height=433&amp;hl=en&amp;q=Rua%20Bulc%C3%A3o%20Viana%20Rio%20do%20Sul+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </figure>
                    </section>
                </div> */}

                <form onSubmit={handleOnSubmit} className="transition-all duration-300">
                    <div className="mb-6">
                        <h2 className="font-bold text-zinc-800 dark:text-zinc-100 mb-2">
                            {t("contactPage.subtitle")}
                        </h2>

                        <div className="grid gap-x-6 gap-y-5 grid-cols-6 font-sfp">

                            <div className="col-span-3">
                                <input type="text" 
                                        name="name" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        placeholder={t("contactPage.input.fullName")}
                                        className="block w-full rounded-md p-3 text-zinc-800 shadow-sm border-zinc-300 placeholder:text-zinc-400 border-2 focus:border-indigo-600 text-sm leading-6
                                dark:bg-zinc-800 dark:border-indigo-400 dark:text-zinc-100" />
                            </div>

                            <div className="col-span-3">
                                <input type="email" 
                                        name="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder={t("contactPage.input.email")}
                                        className="block w-full rounded-md p-3 text-zinc-800 shadow-sm border-zinc-300 placeholder:text-zinc-400 border-2 focus:border-indigo-600 text-sm leading-6
                                dark:bg-zinc-800 dark:border-indigo-400 dark:text-zinc-100" />
                            </div>

                            <div className="col-span-6">
                                <textarea 
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={t("contactPage.input.message")}
                                    className="block w-full min-h-[100px] max-h-52 rounded-md p-3 text-zinc-800 shadow-sm border-zinc-300 placeholder:text-zinc-400 border-2 focus:border-indigo-600 text-sm dark:bg-zinc-800 dark:border-indigo-400 dark:text-zinc-100" />
                            </div>

                        </div>
                    </div>
                    <SubmitButton
                        key={submitButtonText}
                        disabled={isFormSubmitted || isFormPending ? true : false}
                        className="w-full gap-2"
                    >
                        {isFormPending && <PropagateLoader color="white" className="mt-1 mb-5" />}
                        {isFormSubmitted && <Check />}
                        {submitButtonText == "" && !isFormPending ? t("contactPage.button.send") : submitButtonText}
                    </SubmitButton>
                </form>
            </div>
        </motion.div>       
    )
}