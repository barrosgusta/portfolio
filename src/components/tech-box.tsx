import { TextBox } from "@/components/text-box";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiLogoJavascript, BiLogoTypescript, BiLogoDocker, BiLogoPython, BiLogoMongodb, BiLogoPostgresql, BiLogoNodejs, BiLogoTailwindCss } from "react-icons/bi";
import { SiNextdotjs, SiDelphi, SiPrisma, SiNestjs, SiPhp } from "react-icons/si";
import { TbBrandMysql, TbBrandRadixUi, TbBrandRust, TbBrandStripe, TbBrandSwift } from "react-icons/tb";
import { RiOpenaiFill, RiSupabaseLine } from "react-icons/ri";
import { ShadcnUiIcon } from "@/components/icons/shadcn-ui-icon";
import i18n from "@/lib/i18n";

const t = i18n.t;

function ReactJs() {
    return (
        <TextBox.Root className="bg-sky-500">
            <TextBox.Icon icon={<FontAwesomeIcon icon={faReact} />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    React.js
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.reactjs")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )
}

function NestJS() {
    return (
        <TextBox.Root className="bg-black">
            <TextBox.Icon icon={<SiNestjs />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Nest.js
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.nestjs")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )
}

function NextJs() {
    return (
        <TextBox.Root className="bg-black">
            <TextBox.Icon icon={<SiNextdotjs />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Next.js
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.nextjs")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )
}

function JavaScript() {
    return (
        <TextBox.Root className="bg-[rgb(232,235,78)]">
            <TextBox.Icon className="text-black" icon={<BiLogoJavascript />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-black">
                    JavaScript
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-900 text-sm">
                    {t("tech.javascript")}                
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
 )    
}

function TypeScript() {
    return (
        <TextBox.Root className="bg-sky-500">
            <TextBox.Icon icon={<BiLogoTypescript />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    TypeScript
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.typescript")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
 )    
}

function Docker() {
    return (
        <TextBox.Root className="bg-sky-600">
            <TextBox.Icon icon={<BiLogoDocker />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Docker
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.docker")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
 )    
}

function Python() {
    return (
        <TextBox.Root className="bg-gradient-to-tl from-yellow-600 to-blue-600">
            <TextBox.Icon icon={<BiLogoPython />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Python
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.python")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )
}

function Delphi() {
    return (
        <TextBox.Root className="bg-red-500">
            <TextBox.Icon icon={<SiDelphi />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Delphi
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.delphi")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )
}

function MongoDb() {
    return (
        <TextBox.Root className="bg-green-600">
            <TextBox.Icon icon={<BiLogoMongodb />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    MongoDB
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.mongodb")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )    
}

function PostgreSql() {
    return (
        <TextBox.Root className="bg-blue-600">
            <TextBox.Icon icon={<BiLogoPostgresql />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    PostgreSQL
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.postgresql")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )
}

function Php() {
    return (
        <TextBox.Root className="bg-blue-500">
            <TextBox.Icon icon={<SiPhp />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    PHP
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.php")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )
}

function NodeJs() {
    return (
        <TextBox.Root className="bg-green-500">
            <TextBox.Icon icon={<BiLogoNodejs />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Node.js
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.nodejs")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )
}

function ShadcnUi() {
    return (
        <TextBox.Root className="bg-black">
            <TextBox.Icon icon={<ShadcnUiIcon />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Shadcn/UI
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.shadcnui")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
 )
}

function RadixUi() {
    return (
        <TextBox.Root className="bg-black">
            <TextBox.Icon icon={<TbBrandRadixUi />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    RadixUI
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.radixui")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )        
}

function TailwindCss() {
    return (
        <TextBox.Root className="bg-cyan-500">
            <TextBox.Icon icon={<BiLogoTailwindCss />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    TailwindCSS
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.tailwindcss")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )    
}

function OpenAi() {
    return (
        <TextBox.Root className="bg-indigo-500">
            <TextBox.Icon icon={<RiOpenaiFill />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    OpenAI API
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.openai")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )    
}

function Supabase() {
    return (
        <TextBox.Root className="bg-green-500">
            <TextBox.Icon icon={<RiSupabaseLine />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Supabase
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.supabase")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )    
}

function Stripe() {
    return (
        <TextBox.Root className="bg-purple-500">
            <TextBox.Icon icon={<TbBrandStripe />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Stripe
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.stripe")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )    
}

function MySql() {
    return (
        <TextBox.Root className="bg-gradient-to-tl from-orange-600 to-blue-600">
            <TextBox.Icon icon={<TbBrandMysql />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    MySQL
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.mysql")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )    
}

function Swift() {
    return (
        <TextBox.Root className="bg-orange-600">
            <TextBox.Icon icon={<TbBrandSwift />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Swift
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.swift")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )    
}

function Prisma() {
    return (
        <TextBox.Root className="bg-indigo-600">
            <TextBox.Icon className="text-white" icon={<SiPrisma />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Prisma
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.prisma")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
 )    
}

function Rust() {
    return (
        <TextBox.Root className="bg-orange-600">
            <TextBox.Icon icon={<TbBrandRust />} />
            <TextBox.Content.Root>
                <TextBox.Content.Title className="text-white">
                    Rust
                </TextBox.Content.Title>
                <TextBox.Content.Description className="text-zinc-100 text-sm">
                    {t("tech.rust")}
                </TextBox.Content.Description>
            </TextBox.Content.Root>
        </TextBox.Root>
    )    
}


const TechBoxes = {
    ReactJs,
    NestJS,
    NextJs,
    JavaScript,
    TypeScript,
    Docker,
    Python,
    Delphi,
    MongoDb,
    PostgreSql,
    Php,
    NodeJs,
    ShadcnUi,
    RadixUi,
    TailwindCss,
    OpenAi,
    Supabase,
    Stripe,
    MySql,
    Swift,
    Prisma,
    Rust
}

export default TechBoxes;

