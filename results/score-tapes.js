function scoreTapes(tapes) {
    if (tapes < 3) {
        return 'selfcentered';
    }
    return 'wise';
}

export default scoreTapes;