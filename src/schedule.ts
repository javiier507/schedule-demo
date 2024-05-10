export type Employee = {
    id: number;
    fullname: string;
    schedule: Schedule[][];
}

export type Schedule = {
    id: number;
    time: string|null;
    period: Period;
    window: Window;
    type: Type;
}

export type Period = "am" | "pm";

export type Type = "projected" | "actual";

export type Window = "in" | "out";

export const SCHEDULE_EXAMPLE: Employee[] = [
    {
        "id": 0,
        "fullname": "Carlos T",
        "schedule": [
            [
                {
                    "id": 0,
                    "time": "08:00",
                    "period": "am",
                    "window": "in",
                    "type": "projected"
                },
                {
                    "id": 1,
                    "time": "12:00",
                    "period": "am",
                    "window": "out",
                    "type": "projected"
                },
                {
                    "id": 2,
                    "time": "13:00",
                    "period": "pm",
                    "window": "in",
                    "type": "projected"
                },
                {
                    "id": 3,
                    "time": "17:00",
                    "period": "pm",
                    "window": "out",
                    "type": "projected"
                },
                {
                    "id": 4,
                    "time": "08:00",
                    "period": "am",
                    "window": "in",
                    "type": "actual"
                },
                {
                    "id": 5,
                    "time": "12:00",
                    "period": "am",
                    "window": "out",
                    "type": "actual"
                },
                {
                    "id": 6,
                    "time": "13:00",
                    "period": "pm",
                    "window": "in",
                    "type": "actual"
                },
                {
                    "id": 7,
                    "time": "17:00",
                    "period": "pm",
                    "window": "out",
                    "type": "actual"
                }
            ],
            [
                {
                    "id": 8,
                    "time": "08:00",
                    "period": "am",
                    "window": "in",
                    "type": "projected"
                },
                {
                    "id": 9,
                    "time": "12:00",
                    "period": "am",
                    "window": "out",
                    "type": "projected"
                },
                {
                    "id": 10,
                    "time": "13:00",
                    "period": "pm",
                    "window": "in",
                    "type": "projected"
                },
                {
                    "id": 11,
                    "time": "17:00",
                    "period": "pm",
                    "window": "out",
                    "type": "projected"
                },
                {
                    "id": 12,
                    "time": null,
                    "period": "am",
                    "window": "in",
                    "type": "actual"
                },
                {
                    "id": 13,
                    "time": "12:00",
                    "period": "am",
                    "window": "out",
                    "type": "actual"
                },
                {
                    "id": 14,
                    "time": "13:00",
                    "period": "pm",
                    "window": "in",
                    "type": "actual"
                },
                {
                    "id": 15,
                    "time": "17:00",
                    "period": "pm",
                    "window": "out",
                    "type": "actual"
                }
            ]
        ]
    },
    {
        "id": 1,
        "fullname": "Carlos P",
        "schedule": [
            [
                {
                    "id": 0,
                    "time": "",
                    "period": "am",
                    "window": "in",
                    "type": "projected"
                },
                {
                    "id": 1,
                    "time": "",
                    "period": "am",
                    "window": "out",
                    "type": "projected"
                },
                {
                    "id": 2,
                    "time": "",
                    "period": "pm",
                    "window": "in",
                    "type": "projected"
                },
                {
                    "id": 3,
                    "time": "",
                    "period": "pm",
                    "window": "out",
                    "type": "projected"
                },
                {
                    "id": 4,
                    "time": "08:00",
                    "period": "am",
                    "window": "in",
                    "type": "actual"
                },
                {
                    "id": 5,
                    "time": "12:00",
                    "period": "am",
                    "window": "out",
                    "type": "actual"
                },
                {
                    "id": 6,
                    "time": "13:00",
                    "period": "pm",
                    "window": "in",
                    "type": "actual"
                },
                {
                    "id": 7,
                    "time": "17:00",
                    "period": "pm",
                    "window": "out",
                    "type": "actual"
                }
            ],
            [
                {
                    "id": 8,
                    "time": "08:00",
                    "period": "am",
                    "window": "in",
                    "type": "projected"
                },
                {
                    "id": 9,
                    "time": "12:00",
                    "period": "am",
                    "window": "out",
                    "type": "projected"
                },
                {
                    "id": 10,
                    "time": "13:00",
                    "period": "pm",
                    "window": "in",
                    "type": "projected"
                },
                {
                    "id": 11,
                    "time": "17:00",
                    "period": "pm",
                    "window": "out",
                    "type": "projected"
                },
                {
                    "id": 12,
                    "time": "08:00",
                    "period": "am",
                    "window": "in",
                    "type": "actual"
                },
                {
                    "id": 13,
                    "time": "12:00",
                    "period": "am",
                    "window": "out",
                    "type": "actual"
                },
                {
                    "id": 14,
                    "time": "13:00",
                    "period": "pm",
                    "window": "in",
                    "type": "actual"
                },
                {
                    "id": 15,
                    "time": "17:00",
                    "period": "pm",
                    "window": "out",
                    "type": "actual"
                }
            ]
        ]
    }
];
