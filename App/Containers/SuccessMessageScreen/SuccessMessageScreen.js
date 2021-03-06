import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import styles from 'App/Containers/SuccessMessageScreen/SuccessMessageScreenStyle'
import SvgIcon from 'App/Components/SvgIcon/SvgIcon'
import CommonIcons from 'App/Assets/Images/Svg/CommonIcons'
import CustomButton from 'App/Components/CustomButton/CustomButton'
import Line from 'App/Components/Line/Line'
import I18n from 'App/Localization/I18n'

export default class SuccessMessageScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const text = 'we have received your documents, the verification may take a few hours, but it can take longer depending on specific cases, we will send you a notification when its done.'
    return (
      <SafeAreaView style={[styles.container]}>
         <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerBar}>
          <Text style={[styles.logoText]}>
            <Text style={styles.mercuryText}>{I18n.t('MERCURY_DOT')}</Text>
            <Text style={styles.cashText}>{I18n.t('CASH')}</Text>
          </Text>
          <Text style={styles.onboardText}>{I18n.t('ONBOARDING_PROCESS')}</Text>
          <Line styleProp={styles.lineStyle} />
        </View>

        <View style={styles.iconContainer}>
          <SvgIcon
            xml={CommonIcons.successTick}
            width={styles.iconSize.width}
            height={styles.iconSize.height} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.msgText}>{text}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <CustomButton
            primaryBtnText={I18n.t('CONTINUE_BUTTON')}
            secondaryBtnText={I18n.t('CLOSE_APP')}
            withPrimaryBtnGreyBg={false}
            withSecondaryBtnBorder={false}
            onPrimaryBtnClick={this.onPrimaryBtnClick}
            onSecondaryBtnClick={this.onSecondaryBtnClick}
            primaryBtnTestId={''}
            secondaryBtnTestId={''}
          />
        </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  onPrimaryBtnClick = () => {
    alert('continue');
  }

  onSecondaryBtnClick = () => {
    alert('close');
  }

/**
 * According to the pagetype, successtext will be changed
 * @param {string} pageType 
 */
  getContentType(pageType) {
    switch (pageType) {
      case '':
        return 
      case '':
        return 
      case '':
        return 
    }
  }
}