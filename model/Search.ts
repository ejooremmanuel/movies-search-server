import { Schema, model } from "mongoose";

const SearchSchema = new Schema({
  query: {
    type: String,
  },
  date_of_search: {
    type: Date,
    default: Date.now,
  },
});

export default model("Search", SearchSchema);
