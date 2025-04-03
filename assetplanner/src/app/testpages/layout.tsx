
export default function layout({
    children,
  }: Readonly<{ children: React.ReactNode; }>){
    return (
        <>
            <h1>default info</h1>
            {children}
        </>
    )
}