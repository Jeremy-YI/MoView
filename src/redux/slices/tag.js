import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TagService from '../../service/tag';
import { IDLE, FETCH_LOADING, FETCH_SUCCEEDED, FETCH_FAILED } from '../../constants/fetchStatus';

const initialState = {
  tagList: [],
  tag: {},
  status: IDLE, // 'idle' | FETCH_LOADING | FETCH_SUCCEEDED | FETCH_FAILED
  error: null,
};

export const fetchAllTags = createAsyncThunk('tag/fetchAllTags', async () => {
  const res = await TagService.getAll();
  return res.data;
});

export const getTagsByUserId = createAsyncThunk('tag/getTagsByUserId', async (userId) => {
  const res = await TagService.getByUserId(userId);
  return res.data;
});

export const createTags = createAsyncThunk('tag/createTags', async (tag) => {
  const res = await TagService.create(tag);
  return res.data;
});
export const deleteTags = createAsyncThunk('tag/deleteTags', async (tagId) => {
  const res = await TagService.delete(tagId);
  return res.data;
});

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTags.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(fetchAllTags.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.tagList = action.payload;
      })
      .addCase(fetchAllTags.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(getTagsByUserId.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(getTagsByUserId.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.tag = action.payload;
      })
      .addCase(getTagsByUserId.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(createTags.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(createTags.fulfilled, (state) => {
        state.status = FETCH_SUCCEEDED;
      })
      .addCase(createTags.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(deleteTags.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(deleteTags.fulfilled, (state) => {
        state.status = false;
      })
      .addCase(deleteTags.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload;
      });
  },
});

export const selectTag = (state) => state.tag.tagList;

export default tagSlice.reducer;
