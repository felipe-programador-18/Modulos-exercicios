
const Juros = require('./all.juros')

test("Jurossimples", () => {
    const C = 100
    const i = 0.10
    const t = 1
    const jurosEsperados = (10)
    const jurosCalc = Juros.Jurossimple(C,i,t)
    expect(jurosCalc).toBe(jurosEsperados)

})

test("montanteSimples", () => {
    const C = 100
    const i = 0.10
    const t = 1
    const montanteEsperado = (110)
    const Jurossimple = jest.fn()
    Jurossimple.mockImplementation(() => 10)
    const montanteSimples = Juros.pure.montanteSimples({Jurossimple})
    const Montante = montanteSimples(C,i,t)
    expect(Jurossimple.mock.calls[0]).toEqual([C,i,t])
    expect(Montante).toBe(montanteEsperado)
            
    
})


test("MontanteCompost", () => {
    const C = 1000
    const i = 0.10
    const t = 1
    const jurosEsperados = (1100)
    const jurosCalc = Juros.MontanteCompost(C,i,t)
    expect(jurosCalc).toBe(jurosEsperados)

})

test("JurosCompost", () => {
    const C = 1000
    const i = 0.10
    const t = 1
    const montanteJurosCompostos = jest.fn()
    montanteJurosCompostos.mockImplementation(()=> 1100)

    const JurosCompost = Juros.pure.JurosCompost({montanteJurosCompostos})
    const jurosCalc =JurosCompost(C,i,t)

    expect(montanteJurosCompostos.mock.calls[0]).toEqual([C,i,t])
    expect(jurosCalc).toBe(100)

})