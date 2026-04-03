import type { Match } from '../api/types.ts';

export const getMatchStatus = (status: string): string => {
    const statusMap: Record<string, string> = {
        SCHEDULED: 'Запланирован',
        LIVE: 'В прямом эфире',
        IN_PLAY: 'В игре',
        PAUSED: 'Пауза',
        FINISHED: 'Завершен',
        POSTPONED: 'Отложен',
        SUSPENDED: 'Приостановлен',
        CANCELED: 'Отменен',
        TIMED: 'Ожидается'
    };
    return statusMap[status] || status;
};
export const formatScore = (match: Match): string => {
    const { fullTime, extraTime, penalties } = match.score;

    const fullTimeScore = `${fullTime.home ?? '?'}:${fullTime.away ?? '?'}`;

    const extraTimeScore = extraTime && (extraTime.home !== null || extraTime.away !== null)
        ? ` (${extraTime.home ?? '0'}:${extraTime.away ?? '0'})`
        : '';

    const penaltiesScore = penalties && (penalties.home !== null || penalties.away !== null)
        ? ` (${penalties.home ?? '0'}:${penalties.away ?? '0'})`
        : '';

    if (!extraTimeScore && !penaltiesScore) {
        return fullTimeScore;
    }

    return `${fullTimeScore}${extraTimeScore}${penaltiesScore}`;
};