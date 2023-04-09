import { Button } from "@mui/material"; 

function HomeScreen() {
    const materia = "";
    return (
        <>
            <Button variant="outlined" size="medium" color="secondary">Modo Administrador</Button>
            <Button variant="outlined" size="medium" color="secondary">Registrar Uso de Laboratorio</Button>
            <Button variant="outlined" size="medium" color="secondary" disable>Salida de laboratorio para {materia}</Button>
        </>
    );
}

export default HomeScreen;