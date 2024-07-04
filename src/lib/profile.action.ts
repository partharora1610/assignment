"use server"

import data from "../lib/data/sahil-lavingia.json"

interface GetProfileParams {
  slug: string
}

export const getProfile = async (params: GetProfileParams): Promise<string> => {
  const { slug } = params

  return JSON.stringify(data[slug])
}
