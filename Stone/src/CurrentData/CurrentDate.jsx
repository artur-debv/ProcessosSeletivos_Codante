
export function CurrentDate() {
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    const formattedTime = currentDate.toLocaleTimeString('UTC', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });

    return (
        <p style={{ fontFamily: "Roboto", margin: 0, fontSize: "18px", fontWeight: "500", lineHeight: "28.10px" }}>
            {formattedDate} | {formattedTime}
        </p>
    );
}
