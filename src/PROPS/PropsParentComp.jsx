import PropMap from "./PropMap";

const PropsParentComp = () => {
    let music = ["rock", "pop", "jazz"];  // Replace with your actual data

    return (
        <div>
            <PropMap data={music}></PropMap>
        </div>
    );
}

export default PropsParentComp;
