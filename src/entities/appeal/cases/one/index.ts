import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { GetOneAppealSlice } from "@entities/appeal/slices";
import { IAppealDto } from "@shared/interface/entities/appeal";
import { UUIId } from "@shared/interface/common";

const useGetOneAppealUseCase = (port: UUIId) => {
	const execute = async (): Promise<IAppealDto> => {
		return GetOneAppealSlice(port)
	}

	return useQuery({
		queryFn: execute,
		queryKey: [EQueryValues.GetOneAppeal, port],
	})
}

export {
	useGetOneAppealUseCase
}