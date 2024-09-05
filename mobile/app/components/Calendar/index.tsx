import { Feather } from '@expo/vector-icons'
import { LocaleConfig, Calendar as RNCalendar } from 'react-native-calendars'
import colors from 'tailwindcss/colors'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
  today: 'Hoje',
}

LocaleConfig.defaultLocale = 'pt-br'

export function Calendar() {
  const fullConfig = resolveConfig(tailwindConfig)
  const fonts = fullConfig.theme?.fontFamily
  return (
    <RNCalendar
      renderArrow={(direction: any) => (
        <Feather
          size={24}
          color={colors.gray[500]}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: colors.gray[100],
        borderBottomWidth: 0.5,
        borderBottomColor: colors.gray[500],
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: fonts ? fonts?.body : '',
        textDayHeaderFontFamily: fonts ? fonts?.body : '',
        textDayHeaderFontSize: 10,
        textMonthFontFamily: fonts?.title as string,
        textMonthFontSize: 20,
        monthTextColor: colors.gray[500],
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={`${new Date()}`}
    />
  )
}
