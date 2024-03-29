import { useTranslation } from "react-i18next";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function NavBarWindow() {
    const { t } = useTranslation();

    return (
        <nav className="lg:grid hidden w-fit bg-zinc-100 rounded-bl-xl border border-zinc-200 rounded-tr-xl shadow-lg duration-75 z-50
        dark:bg-zinc-800 dark:border-zinc-700 font-semibold">
            <ul className="grid grid-flow-col place-content-center">
                <li className="m-2">
                    <CustomLink to="/home">{t("navBar.home")}</CustomLink>
                </li>
                <li className="m-2">
                    <CustomLink to="/professional">{t("navBar.professional")}</CustomLink>
                </li>
                <li className="m-2">
                    <CustomLink to="/projects">{t("navBar.projects")}</CustomLink>
                </li>
                <li className="m-2">
                    <CustomLink to="/contact">{t("navBar.contact")}</CustomLink>
                </li>
            </ul>
        </nav>
    )
}

interface CustomLinkProps {
    to: string
    children: React.ReactNode
}

function CustomLink({ to, children }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    const additionClasses = "p-3 text-xl hover:text-indigo-500 transition-all duration-400"
    return (
        <Link to={to} className={isActive ? "text-indigo-400" + " " + additionClasses : "text-zinc-700 dark:text-zinc-300" + " " + additionClasses}>
            {children}
        </Link>
    )
}