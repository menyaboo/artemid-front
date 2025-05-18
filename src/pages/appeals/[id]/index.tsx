import type { ReactNode } from 'react';
import { useParams } from "react-router-dom";
import { useGetOneAppealUseCase } from "@entities/appeal/cases";
import { UpdateAppealModal } from "@entities/appeal/ui";
import { IAppealDto } from "@shared/interface/entities/appeal";
import { useModal } from "@shared/hooks";
import { Button } from "@shared/ui";
import { useAuthContext } from "@shared/store/auth";
import { useGuards } from "@shared/store/auth/guards";
import { EUserRoles } from "@shared/enum";

const AppealPage = (): ReactNode => {
	const { id } = useParams<{ id: string }>()
	const { user } = useAuthContext()
	const { isAllowUserRoleInList } = useGuards(user)
	const { data } = useGetOneAppealUseCase({
		id: Number(id),
	})
	const modal = useModal<IAppealDto>()


	return data && (
		<main className="py-10 mx-auto container flex flex-col gap-4">
			<h1 className="font-bold text-[42px]">{ `Обращение #${ data.id }` }</h1>

			<div className="flex flex-col gap-2 text-[20px]">
				<div>
					<p><span>Категория поломки: </span>{ data.type.category.name }</p>
					<p><span>Тип поломки: </span>{ data.type.name }</p>
					<p><span>Сообщение: </span>{ data.message }</p>
					<p><span>Статус: </span>{ data.status.name }</p>
				</div>
				{
					isAllowUserRoleInList(
						<Button onClick={ () => modal.handleOnOpen(() => modal.setProps(data))() } className="w-fit">
							Редактировать
						</Button>, { roles: [EUserRoles.MANAGER, EUserRoles.ADMIN] })
				}

			</div>

			<UpdateAppealModal modal={ modal }/>
		</main>
	)
}

export default AppealPage