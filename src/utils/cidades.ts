
var lista = [
    {
        nome: "Teresina",
        latitude: -5.1863782,
        longitude: -43.0657108,
        z: 10
    },
    {
        nome: "Fortaleza",
        latitude: -3.7933116,
        longitude: -38.589828,
        z: 12
    },
    {
        nome: "São Paulo",
        latitude: -23.6797673,
        longitude: -46.82472,
        z: 10.25
    },
    {
        nome: "Rio de Janeiro",
        latitude: -22.9138838,
        longitude: -43.7268689,
        z: 11
    },
    {
        nome: "São Luis",
        latitude: -2.5606303,
        longitude: -44.3283348,
        z: 12
    },
    {
        nome: "João Pessoa",
        latitude: -7.1466035,
        longitude: -34.9518103,
        z: 12
    },
    {
        nome: "Natal",
        latitude: -5.7999146,
        longitude: -35.2924569,
        z: 12
    },
    {
        nome: "Recife",
        latitude: -8.0432874,
        longitude: -35.0746491,
        z: 11
    },
    {
        nome: "Salvador",
        latitude: -12.8754068,
        longitude: -38.6422302,
        z: 11
    },
    {
        nome: "Aracaju",
        latitude: -11.0059756,
        longitude: -37.2435882,
        z: 11
    }
];

export function cidades (cidade : string){
    lista.forEach(x => {
        if(x.nome == cidade){
            return [x.nome,x.latitude,x.longitude,x.z];
        }
    })
    return ["Teresina",-5.1085329,-42.8129818,12];
}
