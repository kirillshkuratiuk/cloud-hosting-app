export type Instance = {
    id: string;
    name: string;
    status: boolean;
    cpu: string;
    memory: string;
    disk: string;
    ip_address: string;
};

export const instanceList: Instance[] = [
    {
        id: '60640528-7ef3-4a2e-beff-7d3c4777600d',
        name: 'vision-oriented',
        status: true,
        cpu: '2 CPUs',
        memory: '512 MB',
        disk: '25 GB',
        ip_address: '22.237.163.87',
    },
    {
        id: '91d1da2b-be3f-419e-9fab-b6647d535c6b',
        name: 'function',
        status: false,
        cpu: '2 CPUs',
        memory: '512 MB',
        disk: '10 GB',
        ip_address: '52.161.206.61',
    },
    {
        id: '71be4d85-8cba-4748-a2aa-beb1f99ed7d1',
        name: 'coherent',
        status: false,
        cpu: '1 CPU',
        memory: '2 GB',
        disk: '75 GB',
        ip_address: '165.246.235.156',
    },
    {
        id: '365ab9d4-6ae7-47c3-a26a-14896ce48730',
        name: 'hierarchy',
        status: false,
        cpu: '4 CPUs',
        memory: '1 GB',
        disk: '50 GB',
        ip_address: '204.49.243.250',
    },
    {
        id: '1d25a9d8-a950-4595-a798-21b6975b38dd',
        name: 'open-architected',
        status: false,
        cpu: '2 CPUs',
        memory: '4 GB',
        disk: '10 GB',
        ip_address: '55.215.175.72',
    },
    {
        id: '2d55d074-97d9-4afd-8a7d-66f4e002a9d3',
        name: 'fresh-thinking',
        status: true,
        cpu: '4 CPUs',
        memory: '2 GB',
        disk: '25 GB',
        ip_address: '37.215.37.147',
    },
    {
        id: '66cf4969-ec4c-4ac7-92d6-73940b18d1b3',
        name: 'encoding',
        status: true,
        cpu: '4 CPUs',
        memory: '4 GB',
        disk: '25 GB',
        ip_address: '40.120.34.233',
    },
    {
        id: 'f4a888c9-0ca5-460e-baf8-ee73429e0798',
        name: 'compatible',
        status: true,
        cpu: '1 CPU',
        memory: '4 GB',
        disk: '25 GB',
        ip_address: '148.10.64.103',
    },
    {
        id: '56d5fef7-dfab-420c-9ea7-62705a5ccae6',
        name: 'fresh-thinking',
        status: true,
        cpu: '4 CPUs',
        memory: '4 GB',
        disk: '50 GB',
        ip_address: '206.208.193.207',
    },
    {
        id: '4190adba-e3f5-49ec-95dd-63d9fc4ad78d',
        name: 'advanced',
        status: false,
        cpu: '1 CPU',
        memory: '2 GB',
        disk: '50 GB',
        ip_address: '215.160.98.33',
    },
];