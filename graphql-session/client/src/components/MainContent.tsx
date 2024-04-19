
const MainContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ minHeight: "50vh", minWidth: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", borderRadius: "10px",border: "1px solid green" }}>
            {children}
        </div>
    )
}

export default MainContent
