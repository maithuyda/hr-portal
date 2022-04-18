import { Fragment } from 'react';

import SectionHeader from '../UI/SectionHeader';
import MoviesList from '../MoviesList';
import ContentWrapper from '../UI/ContentWrapper';

const Popular = (props) => {
    return (
        <ContentWrapper>
            <SectionHeader title="What's Popular" />
            <MoviesList />
        </ContentWrapper>
    );
};

export default Popular;
