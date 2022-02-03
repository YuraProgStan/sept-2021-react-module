export interface IStarlink {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    };
    links: {
        article_link: null;
        video_link: string;
    };
    rocket: {
        rocket_name: string;
        first_stage: IFirst_stage;
        second_stage: ISecond_stage;
    }
}

interface IFirst_stage {
    cores: ICores[];
}

interface ICores {
    flight: number;
    core: {
        reuse_count: number;
        status: string;
    }
}

interface ISecond_stage {
    payloads: IPayloads[];
}

interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}


/*1) создать интерфейс на основе этого объекта:

{
    "mission_name": "Starlink-15 (v1.0)",
    "launch_date_local": "2020-10-24T11:31:00-04:00",
    "launch_site": {
    "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
},
    "links": {
    "article_link": null,
        "video_link": "https://youtu.be/J442-ti-Dhg"
},
    "rocket": {
    "rocket_name": "Falcon 9",
        "first_stage": {
        "cores": [
            {
                "flight": 7,
                "core": {
                    "reuse_count": 6,
                    "status": "unknown"
                }
            }
        ]
    },
    "second_stage": {
        "payloads": [
            {
                "payload_type": "Satellite",
                "payload_mass_kg": 15400,
                "payload_mass_lbs": 33951.2
            }
        ]
    }
}
}*/

