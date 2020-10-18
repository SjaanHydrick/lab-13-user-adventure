function scoreHP(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 10) {
        return 'frail';
    }
    return 'healthy';
}

export default scoreHP;