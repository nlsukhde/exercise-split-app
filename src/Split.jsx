function Split() {
    return (
        <>
            <label for="programs">Choose a Split: </label>

            <select name="splits" id="program">
            <option value="ppl">Push-Pull-Legs</option>
            <option value="arnold">Arnold Split</option>
            <option value="bro">Bro Split</option>
            <option value="upplow">Upper Lower</option>
            </select>
        </>
    );
}

export default Split;