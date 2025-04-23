export function PurpleStar({className}: {className: string}) {
    return (
        <img src="Images/estrellaPurpura.png" loading="lazy" alt="star" 
                 className={
                    className + " mb-[2vh]"
                 } width="30" />
    )
}