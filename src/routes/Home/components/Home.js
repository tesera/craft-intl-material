import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';

const styles = () => ({
    root: {}
});

const Home = (props) => {
    const {classes, intl} = props;

    return (<div>
        <Typography type="display4" className={classes.title}>
            {intl.formatMessage({id: 'title'})}
        </Typography>
    </div>);
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    intl: intlShape.isRequired
};

export default injectIntl(withStyles(styles)(Home));