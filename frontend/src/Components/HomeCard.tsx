import Icons from "./Icon"

interface Props {
    header: string,
    subheader: string
    icon_value: "briefcase" | "speaker"
    isInDevelopment: boolean
    referrer: string
}


export default function HomeCard( {header, subheader, icon_value, isInDevelopment, referrer} : Props) {
    const header_classname = isInDevelopment ? "HomeCard bg-gray-600 text-white pointer-events-none" : "HomeCard bg-white"
    const subheader_classname = isInDevelopment ? "text-white" : "text-gray-700"
    return (
        <a className={header_classname} href={referrer}>
            <h1>{header}</h1>
            <p className={subheader_classname}>{subheader}</p>
            <Icons icon_type={icon_value} />            
        </a>
    )
}
