// pacote de criação de estratégia de navegação
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Game/Home'
import { Game } from '../screens/Game'

// Navigator => extratégia de contexto de navegação.
// Screen => direcionar o componente conforme a rota.
const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
	return (
		// headerShown => remoção de cabeçalho
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />

			<Screen name="game" component={Game} />
		</Navigator>
	)
}
