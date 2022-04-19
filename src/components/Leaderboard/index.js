import LeaderBoardContent from './LeaderBoardContent';
import ContentWrapper from '../UI/ContentWrapper';
import SectionHeader from '../UI/SectionHeader';

const Leaderboard = (props) => {
    return (
        <ContentWrapper>
            <SectionHeader title="Leaderboard" />
            <LeaderBoardContent />
        </ContentWrapper>
    );
};

export default Leaderboard;
