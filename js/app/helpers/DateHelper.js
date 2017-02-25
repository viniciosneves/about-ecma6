class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciado!!!');
    }

    static textoParaData(texto) {
        
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
    
            throw new Error('Formato de data inválido. Formato deve ser aaaa-mm-dd!!!');
        }
        return new Date(...texto.split('-').map((item, indice) => indice == 1 ? item -1 : item));
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }
}