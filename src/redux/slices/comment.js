import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CommentService from '../../service/comment';
import { IDLE, FETCH_LOADING, FETCH_SUCCEEDED, FETCH_FAILED } from '../../constants/fetchStatus';

const initialState = {
  commentList: [],
  status: IDLE, // 'idle' | FETCH_LOADING | FETCH_SUCCEEDED | FETCH_FAILED
  error: null,
};

export const getCommentsByPostId = createAsyncThunk(
  'comment/getCommentsByPostId',
  async (postId) => {
    const res = await CommentService.getByPostId(postId);
    return res.data;
  }
);

export const createComments = createAsyncThunk('comment/createComments', async (comment) => {
  const res = await CommentService.create(comment);
  return res.data;
});
export const deleteComments = createAsyncThunk('comment/deleteComments', async (commentId) => {
  const res = await CommentService.delete(commentId);
  return res.data;
});

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsByPostId.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(getCommentsByPostId.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.commentList = action.payload;
      })
      .addCase(getCommentsByPostId.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(createComments.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(createComments.fulfilled, (state) => {
        state.status = FETCH_SUCCEEDED;
      })
      .addCase(createComments.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(deleteComments.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(deleteComments.fulfilled, (state) => {
        state.status = false;
      })
      .addCase(deleteComments.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload;
      });
  },
});

export default commentSlice.reducer;
