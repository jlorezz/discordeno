import { RequestManager } from "../../rest/request_manager.ts";
import { DiscordBotGatewayData } from "../../types/mod.ts";
import { endpoints } from "../../util/constants.ts";

/** Get the bots Gateway metadata that can help during the operation of large or sharded bots. */
export function getGatewayBot() {
  return RequestManager.get(
    endpoints.GATEWAY_BOT,
  ) as Promise<DiscordBotGatewayData>;
}
