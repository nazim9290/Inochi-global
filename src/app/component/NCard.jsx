
const NCard = ({data}) => {
    // // //     "word": "私",
// // //     "meaning": "i",
// // //     "bangla": "আমি",
// // //     "hiragana": "わたし",
// // //     "katakana": "ワタシ",
// // //     "romaji": "watashi ",
// // //     "bangla_uccharon": "ওতাসি",
// // //     "level": 5,
    return (
        <div >
<div className="d-flex  justify-content-between">
<p>{data.word}</p>
<p>{data.hiragana}</p>
<p>{data.katakana}</p>
</div>
<hr />
        </div>
    );
}

export default NCard;
