import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import {withStyles} from 'material-ui/styles';

import { IntlProvider } from 'react-intl';
import {getLocaleMessages}  from 'react-intl-locale';

import Home from '../components/Home';

const styles = () => ({
    root: {}
});

class HomeContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            locale: props.locale,
            messages: {}
        };
    }

    componentWillMount() {
        getLocaleMessages(this.state.locale, [
            'data/i18n/{locale}.home.json'
        ]).then((messages) => {
            this.setState({messages});
        });
    }

    render() {
        const { messages } = this.state;

        if (!Object.keys(messages).length) return (<div></div>);

        return (<IntlProvider messages={messages}>
            <Home />
        </IntlProvider>);
    };
}

HomeContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    intl: intlShape.isRequired
};

export default injectIntl(withStyles(styles)(HomeContainer));
