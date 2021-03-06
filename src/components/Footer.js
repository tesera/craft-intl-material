import React from 'react';
import propTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        padding: '1.0rem',
        width: 'calc(100% - 2.0rem)', // 100% - 2*padding
        backgroundColor: theme.palette.grey[800],
        position: 'absolute',
        bottom: '0'
    }
});

const Footer = (props) => {
    const { classes, intl } = props;

    return (
        <div className={classes.root}>
            <Typography align="center">
                {intl.formatMessage({ id: 'footer' })}
            </Typography>
        </div>
    );
};

Footer.propTypes = {
    classes: propTypes.object.isRequired,
    intl: intlShape.isRequired
};

Footer.defaultProps = {

};

export default injectIntl(withStyles(styles)(Footer));
