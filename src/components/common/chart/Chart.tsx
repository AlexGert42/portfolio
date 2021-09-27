import React, {useEffect, useState} from 'react'
import styles from './Chart.module.scss'
import {PieChart} from 'react-minimal-pie-chart';


type ChartType = {
    title: string
    color?: string
    value: number
}


export const Chart: React.FC<ChartType> = ({title, color = '#BA9B5F', value}) => {
    const [t, setT] = useState(0)

    const data = [
        {title, value, color},
    ]

    useEffect(() => {
            if (t === value) {
                return
            }
            setTimeout(() => {
                setT(t + 1)
            }, 15)
    }, [t])


    return (
        <div className={styles.chart__wrapper}>
            <div className={styles.chart}>
                <PieChart
                    data={data}
                    lineWidth={30}
                    startAngle={270}
                    lengthAngle={Math.ceil(t * 360 / 100)}
                />
                <div className={styles.chart__value}>{t}%</div>
            </div>
            <div className={styles.chart__title}>{title}</div>
        </div>

    )
}