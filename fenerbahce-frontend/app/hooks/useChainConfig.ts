import { useMemo } from "react";
import { mainnetChain, testnetChain } from "~/constants";
import type { IChain } from "~/interfaces";
import { switchToNetwork, checkIfIsCorrectNetwork } from "~/utils";

export const useChainConfig = () => {
	const chainConfig: IChain = useMemo(() => {
		if (config.NODE_ENV === "development") {
			return testnetChain; /* localChain */
		} else if (config.NODE_ENV === "test") {
			return testnetChain;
		}

		return mainnetChain;
	}, []);

	return {
		switchToNetwork: async () => await switchToNetwork(chainConfig),
		checkIfIsCorrectNetwork: async () => await checkIfIsCorrectNetwork(chainConfig),
	};
};
