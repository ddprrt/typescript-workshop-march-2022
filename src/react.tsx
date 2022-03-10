type DashboardProps = {
    layout: "grid",
    rows: number
} | {
    layout: "flex",
    wrap: boolean
}

export function Dashboard(props: DashboardProps) {
    return <>Hello</>
}

const lay = <Dashboard layout="flex" wrap={false} />
const lay2 = <Dashboard layout="grid" rows={3} />

const el = <>
    <Dashboard layout="grid" rows={3} />
</>


export {}